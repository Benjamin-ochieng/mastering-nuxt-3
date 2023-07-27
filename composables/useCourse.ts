import courseData from "./courseData";

type Lesson = {
  title: string;
  number: number;
  slug: string;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
};

type Chapter = {
  title: string;
  number: number;
  slug: string;
  lessons: Lesson[];
};

type Course = {
  title: string;
  chapters: Chapter[];
};

export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => { 
    const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
    }));
    return {
      ...chapter,
      lessons
    
    }
  });
  return {
    ...courseData,
    chapters,
  }
};
