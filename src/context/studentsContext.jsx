import { useEffect } from "react";
import React, { createContext, useContext, useReducer } from "react";

const StudentsContext = createContext();

const initialState = {
  // status: "loading",
  filter: [],
  students: [],
  studentsToModify: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, students: action.payload, filter: action.payload };
    case "newStudent":
      return {
        ...state,
        students: [action.payload, ...state.students],
        filter: [action.payload, ...state.students],
      };
    case "filterStudents":
      if (action.payload.career === "all" && action.payload.status === "all")
        return { ...state, filter: state.students };

      return {
        ...state,
        filter: state.students
          .filter((student) => {
            if (action.payload.career === "all") return true;
            return student.career.id === action.payload.career;
          })
          .filter((student) => {
            if (action.payload.status === "all") return true;
            return student.status === action.payload.status;
          }),
      };
    case "addStudentToModify":
      return {
        ...state,
        studentsToModify: [...state.studentsToModify, action.payload],
      };
    case "deleteStudentToModify":
      return {
        ...state,
        studentsToModify: state.studentsToModify.filter(
          (st) => st.id !== action.payload
        ),
      };
    case "deleteStudents":
      return {
        ...state,
        students: state.students.filter((student) =>
          state.studentsToModify.includes(student)
        ),
      };
      
      case "updateStudents":
        // Suponiendo que la acción incluye un nuevo estatus
        const { status } = action.payload;
        
        // Actualizar el estado de los estudiantes seleccionados
        const updatedStudents = state.students.map((student) => {
          if (state.studentsToModify.includes(student)) {
            // Actualizar el estatus del estudiante
            return { ...student, status };
          }
          return student;
        });
  
        return {
          ...state,
          students: updatedStudents,
          filter: updatedStudents,
          studentsToModify: [], // Limpiar la lista de estudiantes a modificar
        };
  
      default:
        throw new Error("Action unknow");
    }
  }

function StudentProvider({ children }) {
  const [{ students, filter }, dispatch] = useReducer(reducer, initialState);

  const createStudent = (student) => {
    dispatch({ type: "newStudent", payload: student });
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("/students.json");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.log("error");
      }
    };

    getStudents();
  }, []);

  return (
    <StudentsContext.Provider
      value={{ students, filter, createStudent, dispatch }}
    >
      {children},
    </StudentsContext.Provider>
  );
}

function useStudents() {
  const context = useContext(StudentsContext);

  return { ...context };
}

export { StudentProvider, useStudents };
