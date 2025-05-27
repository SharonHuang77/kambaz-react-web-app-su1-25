import './Classes.css';

export default function Classes() {
    const color = 'blue'; // This can be dynamically set based on some logic
    const dangerous = true; // Example of a condition that might change the class
    return (
        <div>
        <h2>Classes</h2>
        <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
            Dangerous background
        </div>
        <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
            Dynamic Blue background
        </div><hr/>
        </div>
    )
};
