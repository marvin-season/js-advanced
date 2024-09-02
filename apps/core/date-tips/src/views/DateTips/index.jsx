import DateTipsList from "./components/DateTipsList.jsx";
import EditTips from "./components/EditTips.jsx";
import {createContext, useContext} from "react";
import styles from './style.module.css'
import DateTipsDetail from "./components/DateTipsDetail.jsx";
import {useDateTips} from "./hooks/index.js";

const DateTipsContext = createContext({
    editingId: undefined,
});

export const useDateTipsContext = () => {
    return useContext(DateTipsContext)
}

export default function DateTips() {

    const {
        editingId,
        setEditingId,
        datetipList,
        datetipDetail,
        handleDetail,
        handleDelete,
        handleSave,
        isActive,
        setDatetipDetail
    } = useDateTips()

    return <>
        <div className={`${styles.dateTipsBg}`}>
            <DateTipsContext.Provider value={{
                editingId, setEditingId
            }}>
                <div
                    className={`flex items-start justify-center gap-4 transition-all`}>
                    <div
                        className={`transition-all duration-500 ${isActive ? 'w-[900px] h-full' : 'w-0 h-0'}`}>
                        {editingId && <EditTips tip={datetipDetail} onSave={handleSave} onCancel={() => {
                            setEditingId(undefined);
                        }}/>}
                        {!editingId && datetipDetail && <DateTipsDetail data={datetipDetail} onDelete={handleDelete}/>}
                    </div>

                    <div
                        className={`w-[300px] flex-shrink-0 transition-all duration-500 `}>
                        <div className={'cursor-pointer p-4 mb-6 bg-green-300 text-amber-50 text-xl text-center'}
                             onClick={() => {
                                 if (editingId) {
                                     alert('请先保存当前正在编辑的文档')
                                     return
                                 }
                                 setEditingId(Date.now())
                                 setDatetipDetail(null)
                             }}>发布一篇
                        </div>
                        <DateTipsList datetipList={datetipList} initSelectId={datetipDetail?.id}
                                      onSelect={handleDetail}/>
                    </div>
                </div>

            </DateTipsContext.Provider>
        </div>
    </>
}