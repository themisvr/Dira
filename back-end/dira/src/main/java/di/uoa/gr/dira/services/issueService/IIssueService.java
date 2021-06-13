package di.uoa.gr.dira.services.issueService;

import di.uoa.gr.dira.models.issue.IssueCreateModel;
import di.uoa.gr.dira.models.issue.IssueModel;
import di.uoa.gr.dira.models.project.ProjectIssuesModel;
import di.uoa.gr.dira.services.IService;

public interface IIssueService extends IService<IssueModel, Long> {
    ProjectIssuesModel findAllIssuesByProjectId(Long id);

    IssueModel createIssueWithProjectId(Long projectId, Long customerId, IssueCreateModel issueModel);

    IssueModel findIssueWithProjectId(Long projectId, Long customerId, Long issueId);

//    IssueModel updateIssueWithProjectId(Long projectId, Long customerId, Long issueId, IssueRequestModel issueModel);

    void deleteIssueWithProjectId(Long projectId, Long customerId, Long issueId);
}
