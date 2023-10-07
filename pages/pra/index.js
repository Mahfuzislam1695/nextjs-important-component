import { useState } from 'react';
import styles from '@/styles/Pra.module.css'; // Import your CSS file

const ToggleComponent = () => {
    const [isDivVisible, setIsDivVisible] = useState(true);

    const handleToggle = () => {
        setIsDivVisible(!isDivVisible);
    };

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            <div className={` ${styles.toggleDiv} ${isDivVisible ? styles.visible : styles.hidden}`}>
                This is the div content
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae tempora molestiae consectetur non nesciunt quod eum corporis inventore rerum adipisci iure aspernatur nihil tenetur ipsa eaque, pariatur voluptatum ea.
                This is the div content
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae tempora molestiae consectetur non nesciunt quod eum corporis inventore rerum adipisci iure aspernatur nihil tenetur ipsa eaque, pariatur voluptatum ea.
                This is the div content
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae tempora molestiae consectetur non nesciunt quod eum corporis inventore rerum adipisci iure aspernatur nihil tenetur ipsa eaque, pariatur voluptatum ea.
                This is the div content
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae tempora molestiae consectetur non nesciunt quod eum corporis inventore rerum adipisci iure aspernatur nihil tenetur ipsa eaque, pariatur voluptatum ea.
            </div>

        </div>
    );
};

export default ToggleComponent;
// import { useState } from 'react';

// const ToggleComponent = () => {
//     const [isDivVisible, setIsDivVisible] = useState(true);

//     const handleToggle = () => {
//         setIsDivVisible(!isDivVisible);
//     };

//     return (
//         <div>
//             <button onClick={handleToggle}>Toggle</button>
//             {isDivVisible && <div className='h-24 border-2 border-red-800'>This is the div content</div>}
//         </div>
//     );
// };

// export default ToggleComponent;