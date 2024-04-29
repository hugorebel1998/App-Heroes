import { HeroeList } from "../../components"

export const Dc = () => {

  const title = 'DC Comics';
  return (
    <>
      <div className="text-center h2">{title}</div> <hr />
      <HeroeList publisher={title} />
    </>
  )
}
