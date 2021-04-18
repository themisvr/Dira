package di.uoa.gr.dira.entities.issue;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class IssueComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "issue_comment_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @Column(nullable = false, length = 20000)
    private String comment;
}
