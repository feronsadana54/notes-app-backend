const {
  addNotesHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNotesHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: `/notes/{id}`,
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: `/notes/{id}`,
    handler: updateNoteHandler,
  },
  {
    method: "DELETE",
    path: `/notes/{id}`,
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;

// Hello
