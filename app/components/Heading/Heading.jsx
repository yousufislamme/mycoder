const Heading = (props) => {
  const { title, desc, class1, class2 } = props;
  return (
    <div className="text-center py-3">
      <h2 className={class1}>{title}</h2>
      <p className={class2}>{desc}</p>
    </div>
  );
};

export default Heading;
