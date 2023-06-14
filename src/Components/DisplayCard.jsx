import { Data } from "../data"

export const DisplayCard = ({inputValue}) => {
    const filterData = Data.filter((ele) => {
        const {
            name
        } = ele
        return name.toLowerCase().includes(inputValue)
    })

    return (
        <div className="container">
            <div className="row">
                {
                    filterData?.map((ele,i)=> {
                        const { budget_name} = ele;
                        return (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {budget_name}
                                        </h5>
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <h5>
                                                    Memberfive
                                                </h5>
                                                <h5 className="ml-2">
                                                    Budget
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}