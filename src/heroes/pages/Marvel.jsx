import { HeroeList } from "../../components"


export const Marvel = () => {
    const title = 'Marvel Comics';

    return (
        <>
            <div className="text-center h2">{title}</div> <hr />
            <HeroeList publisher={title} />
        </>
    )
}
