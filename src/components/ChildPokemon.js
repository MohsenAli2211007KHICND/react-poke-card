

export function ChildPoke({ pokemenUrl }) {
    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="card-title">{pokemenUrl.name}</h3>
                        <img src={pokemenUrl.sprites.front_default} class="img-fluid" alt="..." />
                        <div className="card-badge">
                            <div className="d-flex flex-column">
                                <span class="badge bg-primary">Height</span>
                                <span class="badge bg-secondary mt-2">{pokemenUrl.height}</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span class="badge bg-primary">Weight</span>
                                <span class="badge bg-secondary mt-2">{pokemenUrl.weight}</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span class="badge bg-primary ">Type</span>
                                <span class="badge bg-secondary mt-2">{pokemenUrl.types[0].type.name}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header text-center" id="flush-headingOne">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        info
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class=" table table-info">
                                            <tbody>
                                                <tr>
                                                    <td>version:</td>
                                                    <td>{pokemenUrl.game_indices[pokemenUrl.id].version.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Experience:</td>
                                                    <td>{pokemenUrl.base_experience}</td>
                                                </tr>
                                                <tr>

                                                    <td>Order:</td>
                                                    <td>{pokemenUrl.order}</td>
                                                </tr>
                                                <tr>
                                                    <td>Abilities:</td>
                                                    <td>{pokemenUrl.abilities[0].ability.name}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card stats mt-5">
                    <div class="card-body ">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <h3 class="card-title">stats</h3>
                            <div class="carousel-inner d-flex align-items-end">
                                <div class="carousel-item active">
                                    <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[0].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[0].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[0].stat.name}</span></h5>  
                                </div>
                                <div class="carousel-item">
                                <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[1].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[1].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[1].stat.name}</span></h5>
                                </div>
                                <div class="carousel-item">
                                <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[2].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[2].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[2].stat.name}</span></h5>
                                </div>
                                <div class="carousel-item">
                                <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[3].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[3].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[3].stat.name}</span></h5>
                                </div>
                                <div class="carousel-item">
                                <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[4].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[4].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[4].stat.name}</span></h5>
                                </div>
                                <div class="carousel-item">
                                <h5><span>Base Stat:</span> <span> {pokemenUrl.stats[5].base_stat}</span></h5> 
                                    <h5><span> Effort: </span> <span> {pokemenUrl.stats[5].effort} </span></h5>    
                                    <h5><span> Stat Name: </span> <span> {pokemenUrl.stats[5].stat.name}</span></h5>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden"></span>
                            </button>
                            {/* </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}