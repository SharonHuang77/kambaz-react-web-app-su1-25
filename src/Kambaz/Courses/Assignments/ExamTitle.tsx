import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
export default function ExamTitle() {
  return (
    <div className="float-end">
        <div className="d-flex align-items-center gap-2">
            <span className="px-3 py-1 border rounded-pill text-muted small">
            20% of total
            </span>
            <IoAdd className="text-grey fs-5" role="button" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    </div> );}