const Product = (props) => {
    // const { product} = props;
  return (
    <div>
      <img src="/images/peproni.png" alt="pizza peperoni" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{props.product.name}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          Small
        </span>
      </div>
      <div className="flex justify-between items-center m4-4">
        <span>{props.product.price}</span>
        <button className="py-1 px-4 bg-yellow-500 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
