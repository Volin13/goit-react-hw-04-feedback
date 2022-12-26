const Container = ({ children, ...otherProps }) => {
  return (
    <div
      style={{
        height: '70vh',
        fontSize: 40,
        color: '#010101',
        margin: '0 auto',
      }}
      className="container"
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
