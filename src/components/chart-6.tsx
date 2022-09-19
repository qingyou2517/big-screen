import React, {useEffect, useRef} from 'react';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};