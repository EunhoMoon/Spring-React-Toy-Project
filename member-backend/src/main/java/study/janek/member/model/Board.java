package study.janek.member.model;

import java.sql.Timestamp;

public class Board {
	
	private Long id;
	private String title;
	private String content;
	private Long writer;
	private Timestamp writeDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getWriter() {
		return writer;
	}

	public void setWriter(Long writer) {
		this.writer = writer;
	}

	public Timestamp getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(Timestamp writeDate) {
		this.writeDate = writeDate;
	}

	@Override
	public String toString() {
		return "Board [id=" + id + ", title=" + title + ", content=" + content + ", writer=" + writer + ", writeDate="
				+ writeDate + "]";
	}

}
