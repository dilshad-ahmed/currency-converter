import React, { useState, useEffect } from "react";
import axios from "axios";
import { allCurrencies, vs_currencies } from "../data/data";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BASE_URL } from "../../utils/helper";

const CurrencyConverter = () => {
  // form states
  const [sourceCurrency, setSourceCurrency] = useState("bitcoin");
  const [amount, setAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("usd");

  // converted amount states
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [cryptoList, setCryptoList] = useState([]);
  const [vsCurrenciesList, setVsCurrenciesList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [toggleConverter, setToggleConverter] = useState(false);

  // Function to fetch top 100 crypto currencies from server
  const fetchCryptoCurrencies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/all-currencies`);
      setCryptoList(response.data);
    } catch (error) {
      console.error("Error fetching crypto list:", error);

      // added all currencies here because in CoinGecko public api has rate limit
      if (
        error?.response?.data?.message === "Request failed with status code 429"
      ) {
        setCryptoList(allCurrencies);
      }
    }
  };

  // Function to fetch supported vs currencies from server
  const fetchVsCurrencies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/vs-currencies`);
      setVsCurrenciesList(response.data);
    } catch (error) {
      console.error("Error fetching crypto list:", error);
    }
  };

  useEffect(() => {
    fetchCryptoCurrencies();
    fetchVsCurrencies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sourceCurrency || !amount || !targetCurrency) {
      return alert("Please fill in all the fields.");
    }

    setLoading(true);

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/convert-currency`, {
        params: {
          sourceCrypto: sourceCurrency,
          amount,
          targetCurrency,
        },
      });

      setLoading(false);
      setConvertedAmount(response.data);
    } catch (error) {
      console.error("Error converting currency:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mb-14">
      <form onSubmit={handleSubmit}>
        <div className="max-w-xl mx-auto space-y-6">
          <div>
            <p className="text-violet-300 mb-1">Source Cryptocurrency:</p>
            <select
              value={sourceCurrency}
              onChange={(e) => setSourceCurrency(e.target.value)}
              className="w-full bg-secondary/20 p-2 rounded-md"
              required={true}
            >
              {cryptoList.map((crypto) => (
                <option
                  key={crypto.id}
                  value={crypto.id}
                  className="bg-brandDark p-2 rounded-md"
                >
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-violet-300 mb-1">Amount</p>
            <input
              type="number"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-secondary/20 p-2 rounded-md"
              required={true}
            />
          </div>
          <div>
            <p className="text-violet-300 mb-1">Target Currency</p>
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="w-full bg-secondary/20 p-2 rounded-md"
              required={true}
            >
              <option value="usd" className="bg-brandDark p-2 rounded-md">
                usd
              </option>
              {vsCurrenciesList.map((data, index) => (
                <option
                  key={index}
                  value={data}
                  className="bg-brandDark p-2 rounded-md"
                >
                  <span className="!uppercase">{data}</span>
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center !mt-8">
            <button type="submit" className="w-full primary-button font-bold">
              Convert Amount {loading ? "..." : ""}
            </button>
          </div>
          {convertedAmount !== null &&
            Object.keys(convertedAmount).length !== 0 && (
              <div className="bg-secondary/20 p-6 flex justify-between items-center">
                <div className="space-y-4">
                  <p>
                    Exchange Rate = {convertedAmount.exchangeRate}{" "}
                    {convertedAmount.targetCurrency}
                  </p>
                  {!toggleConverter ? (
                    <p>
                      {convertedAmount.amount} {convertedAmount.sourceCrypto} ={" "}
                      {convertedAmount.convertedAmount}{" "}
                      {convertedAmount.targetCurrency}
                    </p>
                  ) : (
                    <p>
                      {convertedAmount.amount} {convertedAmount.targetCurrency}{" "}
                      ={" "}
                      {(
                        convertedAmount.amount / convertedAmount.convertedAmount
                      ).toFixed(5)}{" "}
                      {convertedAmount.sourceCrypto}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="text-3xl sm:text-4xl"
                    title="Toggle Converter"
                    type="button"
                    onClick={() => setToggleConverter(!toggleConverter)}
                  >
                    <MdOutlineChangeCircle />
                  </button>
                </div>
              </div>
            )}
        </div>
      </form>
    </div>
  );
};

export default CurrencyConverter;
