import { useEffect, useState } from "react";
import "./App.css";
import type { ApiResponse, Course, VersionResponse } from "./types";
import CourseCard from "./components/CourseCard";

import chaiLogo from "./assets/chai.svg";

function App() {
  const [courses, setCourses] = useState<Course[]>();
  const [dataSource, setDataSource] = useState("");
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState("v1");
  const [host, setHost] = useState("unknown");

  const fetchCourses = async (): Promise<void> => {
    try {
      setLoading(true);

      const response: Response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/courses`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      setCourses(data.data);
      setDataSource(data.source);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const seedCourse = async (): Promise<void> => {
    try {
      setLoading(true);

      const response: Response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/seed`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: unknown = await response.json(); // Replace 'unknown' with a proper interface if you know the shape

      console.log(data);
    } catch (error) {
      console.error("Error seeding courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response: Response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/version`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: VersionResponse = await response.json();

        setVersion(data.version);
        setHost(data.host);
      } catch (error) {
        console.error("Error fetching version:", error);
      }
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://chaicode.com" target="_blank">
          <img src={chaiLogo} className="logo chai code" alt="Chai Code logo" />
        </a>
      </div>
      <h1>
        ChaiCode DevOps {version} ({host})
      </h1>
      <div className="card">
        <button onClick={fetchCourses} disabled={loading}>
          {loading ? "Loading..." : "View courses"}
        </button>
      </div>
      <div className="card">
        <button onClick={seedCourse} disabled={loading}>
          {loading ? "Loading..." : "Seed course"}
        </button>
      </div>
      {dataSource && (
        <p className="data-source">Data loaded from: {dataSource}</p>
      )}
      <div className="courses-grid">
        {(courses ?? []).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
      <p className="read-the-docs">Home for Programmers</p>
    </>
  );
}

export default App;
