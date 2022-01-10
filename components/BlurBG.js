const BlurBG = ({
  className = '',
  bg = 'bg-[#0070f3]',
  width = 'w-[600px]',
  height = 'h-[600px]',
  blur = 'blur-3xl',
  opacity = 'opacity-10',
  left = '',
  right = '',
  top = '',
  bottom = '',
}) => {
  return (
    <div
      className={`${className} ${bg} ${width} ${height} rounded-full filter ${blur} ${opacity} absolute ${top} ${right} ${bottom} ${left} `}
    ></div>
  );
};

export default BlurBG;
