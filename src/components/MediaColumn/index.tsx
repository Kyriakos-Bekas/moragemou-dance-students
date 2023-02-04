import { memo, useRef, useState } from "react";
import { SpeakerIcon, SpeakerOffIcon } from "../Icons";

const MediaColumn = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	return (
		<div
			id='media'
			className='relative lg:sticky lg:top-0 h-[60vh] lg:h-[100vh] block sm:hidden lg:block'>
			<video
				className='lg:absolute lg:inset-0 w-full h-full object-cover hover:'
				src='/media/awareness-video.mp4'
				autoPlay={true}
				loop={true}
				controls={false}
				muted={muted}
				ref={videoRef}
				onMouseEnter={() => videoRef.current?.pause()}
				onMouseLeave={() => videoRef.current?.play()}></video>

			<button
				className='absolute bottom-4 right-4 p-2 rounded-full bg-white'
				onClick={() => setMuted((prevState) => !prevState)}>
				{muted ? (
					<SpeakerOffIcon className='w-4 h-4 text-black' />
				) : (
					<SpeakerIcon className='w-4 h-4 text-black' />
				)}
			</button>
		</div>
	);
};

export default memo(MediaColumn);
export { MediaColumn as MediaColumnNotMemoized };
