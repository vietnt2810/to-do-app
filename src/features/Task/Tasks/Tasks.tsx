import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetTasks } from "hooks/task/tasks/useGetTasks";

import { Task } from "types/types";

import TaskItems from "./TaskItems";

import SearchBar from "./SearchBar";

import {
  Container,
  TaskTable,
  TableHeaderRow,
  Pagination,
} from "./tasksStyles";
import { Button, ButtonHolder } from "components/styledComponents/button";
import { Message } from "components/styledComponents/message";

const Tasks: React.FC<{
  itemsPerPage: number;
}> = ({ itemsPerPage }) => {
  const navigate = useNavigate();

  const { data, isTasksLoading, isError } = useGetTasks();

  const [filterValue, setFilterValue] = useState("");

  const tasks = data?.data.filter((task: Task) => {
    return task.title.toLowerCase().includes(filterValue.toLowerCase());
  });

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleAddTask = () => {
    navigate("add-task");
  };

  const handleAddCategory = () => {
    navigate("add-category");
  };

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = tasks?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tasks?.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % tasks?.length;
    setItemOffset(newOffset);
  };

  if (isTasksLoading) return <Message>Loading..</Message>;

  if (isError) return <Message>Error</Message>;

  return (
    <Container>
      <SearchBar filterValue={filterValue} handleChange={handleSearchBar} />
      <TaskTable>
        <tbody>
          <TableHeaderRow>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
          </TableHeaderRow>
          <TaskItems currentItems={currentItems} />
        </tbody>
      </TaskTable>
      <ButtonHolder>
        <Button onClick={handleAddTask}>Add a task</Button>
        <Button onClick={handleAddCategory}>Add a category</Button>
      </ButtonHolder>

      <Pagination>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </Pagination>
      <Outlet />
    </Container>
  );
};

export default Tasks;
