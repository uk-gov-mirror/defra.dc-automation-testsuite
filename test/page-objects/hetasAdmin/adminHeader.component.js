/**
 * Reusable admin header component (sign-out navigation), rendered via the hmrc-frontend
 * library's classes even though this is a DEFRA service - many GOV.UK services reuse it.
 */
class AdminHeaderComponent {
  //
  // ===== SELECTORS =====
  //

  // Unique HMRC Frontend component class (hmrc-sign-out-nav__link), not a GDS styling utility.
  get signOutLink() {
    return $('.hmrc-sign-out-nav__link')
  }

  //
  // ===== ACTIONS =====
  //

  async signOut() {
    await this.signOutLink.click()
  }
}

export default new AdminHeaderComponent()
