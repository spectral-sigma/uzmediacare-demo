import BlobCursor from "./BlobCursor";

const SystemSection = ({ className = "", id = "" }) => {
  return (
    <div className={`h-screen w-full bg-[#090213] ${className}`} id={id}>
      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={0}
      />
    </div>
  );
};

export default SystemSection;
