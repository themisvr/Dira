package di.uoa.gr.dira.controllers;

import di.uoa.gr.dira.models.project.ProjectModel;
import di.uoa.gr.dira.models.project.ProjectUsersModel;
import di.uoa.gr.dira.services.projectService.IProjectService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Validated
@RestController
@RequestMapping("projects")
public class ProjectController {
    private final IProjectService service;

    public ProjectController(IProjectService service) {
        this.service = service;
    }

    @GetMapping
    /* TODO: retrieve all projects depending on user's visibility */
    public List<@Valid ProjectModel> getAllProjects() {
        return service.findAll();
    }

    @PostMapping
    public @Valid
    ProjectModel createProject(@Valid @RequestBody ProjectModel project) {
        return service.save(project);
    }

    @DeleteMapping
    public void deleteAllProjects() {
        service.deleteAll();
    }

    @GetMapping("{projectId}")
    public @Valid
    ProjectModel getProjectById(@PathVariable Long projectId) {
        return service.findById(projectId);
    }

    @DeleteMapping("{projectId}")
    public void deleteProjectById(@PathVariable Long projectId) {
        service.deleteById(projectId);
    }
}
