export default function HomeTrending4cards({
  top,
  bottom,
  left,
  right,
  rotate,
  img
}: {
  top: string;
  bottom: string;
  left: string;
  right: string;
  rotate:string;
  img:string;
}) {
  return (
    <div className={` absolute max-h-80 max-w-80  ${top}  ${bottom} ${left}  ${right} ${rotate}  rounded-2xl overflow-hidden`}>
      <img src={ img || "./demo.png"} 
      alt="card"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]"></div>
      
    </div>
  );
}
