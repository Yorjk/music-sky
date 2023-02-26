import './ProgressBar.css';

export const ProgressBar = ({ progressRef, audioRef }) => {
    const progressChange = () => {
        audioRef.current.currentTime = progressRef.current.value / 1000 * audioRef.current.duration
    }
    return (
        <input className="bar__player_progress" type="range" ref={progressRef} defaultValue={0} max={1000}
            onChange={progressChange} />
    )
}