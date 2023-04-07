const ShimmerUIComponent = () => {
    return (
        <div className="restaurant-list">
        {
            Array(10).fill("").map((value, index) => {
                return <div key={index} className="shimmer-card"></div>
            })
        }
        </div>
    )
}

export default ShimmerUIComponent;