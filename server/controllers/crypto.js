

export const COINBASE_API = async (req, res) => {

    try {

        // get api call from coinbase and then return it.
        res.status(200).json({ result: "price" });

    } catch (error) {
        res.status(500).json({ message: "Error in coinbase api call" });
    }
}

export const BINANCE_API = async (req, res) => {

    try {

        // get api call from Binance and then return it.
        res.status(200).json({ result: "price" });

    } catch (error) {
        res.status(500).json({ message: "Error in Binance api call" });
    }
}