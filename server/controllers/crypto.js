import axios from 'axios';

export const GetPrices = async (req, res) => {

         axios.all([

            // coinbase [https://api.coinbase.com/v2/prices/{cryptoSymbol}-{currencyCode}/buy or sell]
            axios.get("https://api.coinbase.com/v2/prices/BTC-USD/buy"),
            axios.get("https://api.coinbase.com/v2/prices/BTC-USD/sell"),
            axios.get("https://api.coinbase.com/v2/prices/ETH-USD/buy"),
            axios.get("https://api.coinbase.com/v2/prices/ETH-USD/sell"),

            // Kraken [https://api.kraken.com/0/public/Ticker?pair={currency pair}]
            axios.get("https://api.kraken.com/0/public/Ticker?pair=BTCUSD"),
            axios.get("https://api.kraken.com/0/public/Ticker?pair=ETHUSD"),


        ]).then(axios.spread((obj1, obj2, obj3, obj4, obj5, obj6) => {

            res.status(200).json({ 
                  coinBase_BTC_BUY: obj1.data.data.amount,
                  coinBase_BTC_SELL: obj2.data.data.amount,
                  coinBase_ETH_BUY: obj3.data.data.amount,
                  coinBase_ETH_SELL: obj4.data.data.amount, 
                  kraken_BTC_BUY: obj5.data.result.XXBTZUSD.a[0],
                  kraken_BTC_SELL: obj5.data.result.XXBTZUSD.b[0],
                  kraken_ETH_BUY: obj6.data.result.XETHZUSD.a[0],
                  kraken_ETH_SELL: obj6.data.result.XETHZUSD.b[0],
            });

        })).catch((err) => {
            console.log(err);
        })
    }