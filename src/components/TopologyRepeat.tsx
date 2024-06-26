interface Props {
    title?: string[];
    imageSrcs: any[];
}

export const TopologyRepeat = (props: Props) => {
    return (
        <div className={`panel grid lg:grid-cols-2 gap-6`}>
            {props.imageSrcs.map((imageSrc: any, idx: number) => {
                return (
                    <div key={idx} className={`panel lg:col-span-1`}>
                        {props.title && <h3 className=" font-semibold text-2xl">{props.title[idx]}</h3>}
                        <img className="" src={imageSrc} alt="placeholder" />
                    </div>
                );
            })}
        </div>
    );
};
