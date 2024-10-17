function Nav(){
    return (
      <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>amanii</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/"><b>Home</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/resources"><b>Resources</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addResource"><b>Add a resource</b></a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
    )
  }

  export default Nav