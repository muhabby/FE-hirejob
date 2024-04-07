import { useState, useEffect } from 'react';

const Notification = ({ data }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-green-500 text-dark px-4 py-2 rounded-md transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {data && data.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
