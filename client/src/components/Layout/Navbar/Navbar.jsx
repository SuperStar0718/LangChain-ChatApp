import { useRef } from 'react';



export default function Navbar(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }





  return (
    <nav className="flex justify-between w-full p-4">
      <div className='flex'>
        <button className="w-[36px] h-[36px] grid btn-collapse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
            strokeWidth={0.5}
          >
            <path
              color="#ffffff"
              d="M4 4h4  M4 5.5h4 M4 7h4"
            />
          </svg>
        </button>

       
      </div>

      <div className='flex text-gray-100'>
        <button className='btn-collapse px-3 mx-2' style={{ color: "#F3F3F3" }}>Search sessions</button>

        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
      
        />
        <button onClick={handleClick}
          className="w-[36px] h-[36px] grid btn-collapse place-content-center"
        >
          +
        </button>
      </div>
    </nav>
  );
}