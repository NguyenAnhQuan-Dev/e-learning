import Heading from "@/components/common/Typography/Heading";
import CourseItem from "@/components/courses/CourseItem";
import LayoutCourses from "@/components/courses/LayoutCourses";
import { TCourseItem } from "@/types/index.d";

export default function ExplorePage() {
  const listCourse: TCourseItem[] = [
    {
      id: 1,
      urlImg:
        "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HTML & CSS Pro",
      rating: "5.0",
      view: "1.200",
      price: "499.000",
    },
    {
      id: 3,
      urlImg:
        "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HTML & CSS Pro",
      rating: "5.0",
      view: "1.200",
      price: "499.000",
    },
    {
      id: 4,
      urlImg:
        "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HTML & CSS Pro",
      rating: "5.0",
      view: "1.200",
      price: "499.000",
    },
  ];

  return (
    <div className="p-5 bg-secondary">
      <Heading title="Courses" />
      <LayoutCourses>
        {listCourse.map((course) => (
          <CourseItem
            key={course.id}
            urlImg={course.urlImg}
            title={course.title}
            rating={course.rating}
            view={course.view}
            price={course.price}
          />
        ))}
      </LayoutCourses>
    </div>
  );
}
