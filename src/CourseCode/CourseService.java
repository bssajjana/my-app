import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepo;

	public String upsert(Course course) {
		courseRepo.save(course);
		return "Inserted Successfully";
	}

	public Course getById(Integer cid) {
		java.util.Optional<Course> cs = courseRepo.findById(cid);
		if (cs.isPresent()) {
			return cs.get();
		}
		return null;
	}

	public List<Course> getAllCourses() {
		return courseRepo.findAll();
	}

	public String deleteById(Integer cid) {
		if (courseRepo.existsById(cid)) {
			courseRepo.deleteById(cid);
			return "Delete Success";
		} else {
			return "No Record Found";
		}
	}

}