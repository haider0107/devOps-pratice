import type { Course } from "../types";

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-details">
        <span>Duration: {course.duration}</span>
        <span>Level: {course.level}</span>
        <span>Price: ₹{course.price}</span>
      </div>
      <div className="course-topics">
        {course.topics.map((topic, index) => (
          <span key={index} className="topic-tag">
            {topic}
          </span>
        ))}
      </div>
      <p className="instructor">By {course.instructor}</p>
    </div>
  );
};

export default CourseCard;
