const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="flex justify-center w-full md:w-3/4 m-auto">
      <div className="flex flex-row justify-start items-center h-20 border-b border-solid border-gray-100 w-3/4  px-0 py-2 ">
        <div className="flex items-center pr-6">
          <img src={image} alt="{name}" className="w-8 h-8 mr-3" />
        </div>
        <h1 className="text-sm w-36">{name}</h1>
        <p className="uppercase">{symbol}</p>
      </div>
      <div className="flex text-right justify-between w-full items-center">
        <p className="w-28" suppressHydrationWarning>
          ₹{price}
        </p>
        <p className="w-36" suppressHydrationWarning>
          ₹{volume.toLocaleString()}
        </p>
        {priceChange < 0 ? (
          <p className="text-red-500 w-24" suppressHydrationWarning>
            {priceChange.toFixed(2)}%
          </p>
        ) : (
          <p className="text-green-500" suppressHydrationWarning>
            {priceChange.toFixed(2)}%
          </p>
        )}

        <p className="w-56" suppressHydrationWarning>
          Mkt Cap: ₹{marketcap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coins;
