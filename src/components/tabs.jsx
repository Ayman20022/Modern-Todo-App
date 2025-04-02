export default function Tabs(props){
    const tabs = ['All','Open','Completed']
    const {todos,selectedTab,setSelectedTab} = props
    return (
        <nav className="tab-container">
            {
                tabs.map((tab,tabIndex)=>{
                    const numOfTasks = (tab === 'All')?todos.length:
                    (tab==='Open')?todos.filter(e=>!e.complete).length:
                    todos.filter(e=>e.complete).length
                    return (
                        <button 
                        className ={'tab-button ' + (tab===selectedTab) ? 
                        'tab-selected' : ''}

                        key={tabIndex} 

                        onClick={()=>{
                            setSelectedTab(tab)
                        }}>
                            <h4>{tab} <span>{numOfTasks}</span></h4>
                        </button>
                    )
                })
            }
            <hr />
        </nav>
    )
}