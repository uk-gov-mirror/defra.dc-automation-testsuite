/**
 * Reusable GOV.UK task list component (e.g. "Review documentation", "Prepare
 * public listing" groups). Each task's status is linked to its name via
 * aria-describedby, so the status is read through that relationship rather
 * than its numbered id, which is an implementation detail that could shift if
 * tasks are reordered or added.
 */
class TaskListComponent {
  //
  // ===== SELECTORS =====
  //

  getTaskLink(taskName) {
    return $(
      `//a[contains(@class,"govuk-task-list__link") and normalize-space(text())="${taskName}"]`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async getTaskStatus(taskName) {
    const link = await this.getTaskLink(taskName)
    const statusId = await link.getAttribute('aria-describedby')
    return (await $(`#${statusId}`).getText()).trim()
  }

  async openTask(taskName) {
    await this.getTaskLink(taskName).click()
  }
}

export default new TaskListComponent()
