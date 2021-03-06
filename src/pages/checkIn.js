export const checkInTemplate = (data) => {
    return `
        </br>
        <div class="row">
            <h5>Participant check-in</h5>
        </div>
        </br>
        <form method="POST" id="checkInCompleteForm">
            <div class="row">
                <div>${data.RcrtUP_Lname_v1r0}, ${data.RcrtUP_Fname_v1r0}</div>
                <div class="ml-auto">Connect ID: <svg id="connectIdBarCode"></svg></div>
            </div>
            <div class="row">
                Verify contact information &nbsp;
                <button type="button" class="btn btn-outline-primary" id="contactInformationModal" data-target="#biospecimenModal" data-toggle="modal">Contact Information</button>
            </div>
            <div class="row">
                <div class="form-group">
                    <label for="biospecimenVisitType">Select visit</label>
                    <select class="form-control" required data-participant-token="${data.token}" data-connect-id="${data.Connect_ID}" id="biospecimenVisitType">
                        <option value=""> -- Select Visit -- </option>
                        <option selected value="Baseline">Baseline</option>
                    </select>
                </div>
            </div>
            
            </br>
            <div class="row info-row">
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Consent</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-check"></i></span></div>
                        <div class="row"><span class="full-width">${new Date(data.RcrtCS_ConsentSumit_v1r0).toLocaleString()}</span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Match Verification</span></div>
                        <div class="row"><span class="full-width">${data.state.RcrtV_Verification_v1r0 === 1 ? `<i class="fas fa-2x fa-check"></i>`: `<i class="fas fa-2x fa-times"></i>`}</span></div>
                        <div class="row"></br></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">SSN entered</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                        <div class="row"><span class="full-width">Not entered</span></div>
                    </div>
                </div>
            </div>
            <div class="row info-row">
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline module 1</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline module 2</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline module 3</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline module 4</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
            </div>
            <div class="row info-row">
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline blood</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline mouthwash</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 info-box">
                        <div class="row"><span class="full-width">Baseline urine</span></div>
                        <div class="row"><span class="full-width"><i class="fas fa-2x fa-times"></i></span></div>
                    </div>
                </div>
            </div>
            </br>
            <div class="row">
                <div class="col">
                    <button class="btn btn-outline-dark" id="checkInExit"><i class="fas fa-arrow-left"></i> Exit</button>
                </div>
                <div class="ml-auto">
                    <button class="btn btn-outline-primary" type="submit" id="checkInComplete">Check-In complete</button>
                </div>
            </div>
        </form>
    `
}