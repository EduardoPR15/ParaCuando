interface Props {
  like: boolean;
}
const LikeButton = ({ like }: Props) => {
  return (
    <div
      className={`${
        like ? 'bg-primary-pink' : 'bg-primary-gray'} w-10 h-10 rounded-full`}
    >
      <svg
        className="Heart-icon relative top-2.5 left-1.5"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.15 1C4.20125 1 1 4.1565 1 8.05005C1 15.1001 9.45 21.5092 14 23C18.55 21.5092 27 15.1001 27 8.05005C27 4.1565 23.7987 1 19.85 1C17.432 1 15.2935 2.18377 14 3.99563C13.3407 3.06964 12.4648 2.31393 11.4465 1.79248C10.4282 1.27103 9.29744 0.999202 8.15 1Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default LikeButton;
