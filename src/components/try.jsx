import { imgs } from "./imgs";
export const Try = () => {
    return (
        <div className=" flex gap-11 ">
            {imgs.map((item, i) => (
                <div>
                    <img className="h-[300px] w-[300px] " key={i} src={item.imgsrc} />
                    <p>{item.address}</p>
                    <p>{ item.location}</p>
                </div>
            ))}
        </div>
    )
}