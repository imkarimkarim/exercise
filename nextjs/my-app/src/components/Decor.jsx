import Image from "next/image";

export const Decor = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="decor-1">
                <Image src={"/Decore.png"} width={702.449} height={799.86} alt="" />
            </div>
            <div className="decor-2">
                <Image src={"/Ellipse.png"} width={478.94} height={496.86} alt="" />
            </div>
            <style jsx>{`
                .decor-1,
                .decor-2 {
                    position: absolute;
                    z-index: -990;
                }

                .decor-1 {
                    right: 0;
                    top: 0;
                }

                .decor-2 {
                    top: 0;
                    left: 0px;
                }
            `}</style>
        </div>
    );
};
