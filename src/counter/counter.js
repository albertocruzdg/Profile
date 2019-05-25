import React from 'react';

function Counter() {
    const [countOfBananas, setCountOfBananas] = useState(0);
    const [countOfApples, setCountOfApples] = useState(0);
    const [extraItem, setExtraItem] = useState('Michigan');
    
    return (
      <div>
        <div>
          <p>Buy {countOfBananas} bananas</p>
          <button onClick={() => setCountOfBananas(countOfBananas + 1)}>
            Add bananas
          </button>
        </div>
        <div>
          <p>Buy {countOfApples} apples</p>
          <button onClick={() => setCountOfApples(countOfApples + 1)}>
            Add bananas
          </button>
        </div>
        <div>
          <p>Buy also {extraItem}</p>
          <input value={extraItem} onChange={(event) => {
            setExtraItem(event.target.value);
            event.preventDefault();
          }}/>
        </div>
      </div>
    );
  }