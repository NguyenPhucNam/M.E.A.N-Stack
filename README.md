# M.E.A.N-Stack
  <ng-container [ngSwitch]="true">
      <ng-container *ngSwitchCase="10">Code A</ng-container>
      <ng-container *ngSwitchCase="2">Code B</ng-container>
      <ng-container *ngSwitchCase="3">Code C</ng-container>
  </ng-container>

  <div class="conainter-fluid">

    <!-- <ng-container *ngIf="data.length > 10; else none"> -->

      
      <!-- start first-row -->
      <div class="first-row">
        <div class="row py-4 border">
          <div class="col-sm-12">
            <div class="text-center">Quated</div>
          </div>
        </div>
        <!-- Initial -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Initial</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                <div *ngIf="i < 6 && !data[i].single" #valueA class="col-sm-2 py-4 border">{{data[i].name}}</div>
                <div *ngIf="i < 6 && data[i].single" class="col-sm-6 py-4 border border-bottom-0"></div>
              </ng-container>
            </div>
          </div>
        </div>
        {{ valueA }}aa
        <!-- Actual -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Actual</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                <div *ngIf="i < 6 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                <div *ngIf="i < 6 && data[i].single" class="col-sm-6 py-4 border border-bottom-0 border-top-0">
                    <input type="text" class="form-control" id="a" name="password">
                </div>
              </ng-container>
            </div>
          </div>
        </div>
        <!-- Submittion -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Submittion</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                <div *ngIf="i < 6 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                <div *ngIf="i < 6 && data[i].single" class="col-sm-6 py-4 border border-top-0"></div>
              </ng-container>
            </div>
          </div>
        </div>
        <!-- end -->
      </div>
      <!-- end first-row -->
      <div class="row border py-4"></div>
      <!-- start second-row -->
      <div class="second-row">
        <div class="row py-4 border">
          <div class="col-sm-12">
            <div class="text-center">Quated</div>
          </div>
        </div>
        <!-- Initial -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Initial</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 5  && i < 10 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                  <div *ngIf="i > 5  && i < 10 && data[i].single" class="col-sm-4 py-4 border border-bottom-0"></div>
              </ng-container>
            </div>
          </div>
        </div>
        <!-- Actual -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Actual</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 5  && i < 10 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                  <div *ngIf="i > 5  && i < 10 && data[i].single" class="col-sm-4 py-4 border border-bottom-0 border-top-0">
                      <input type="text" class="form-control" id="a" name="password">
                  </div>
              </ng-container>
            </div>
          </div>
        </div>
        <!-- Submittion -->
        <div class="row">
          <div class="col-sm-1 py-4 border">Submittion</div>
          <div class="col-sm-11">
            <div class="row">
              <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 5  && i < 10 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                  <div *ngIf="i > 5  && i < 10 && data[i].single" class="col-sm-4 py-4 border border-top-0"></div>
              </ng-container>
            </div>
          </div>
        </div>
        <!-- end -->
      </div>
      <!-- end second-row -->
      <div class="row border py-4"></div>
      <!-- start third-row -->
      <div class="third-row">
        <div class="row py-4 border">
            <div class="col-sm-12">
              <div class="text-center">Quated</div>
            </div>
          </div>
          <!-- Initial -->
          <div class="row">
            <div class="col-sm-1 py-4 border">Initial</div>
            <div class="col-sm-11">
              <div class="row">
                <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 9 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                </ng-container>
              </div>
            </div>
          </div>
          <!-- Actual -->
          <div class="row">
            <div class="col-sm-1 py-4 border">Actual</div>
            <div class="col-sm-11">
              <div class="row">
                <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 9 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                </ng-container>
              </div>
            </div>
          </div>
          <!-- Submittion -->
          <div class="row">
            <div class="col-sm-1 py-4 border">Submittion</div>
            <div class="col-sm-11">
              <div class="row">
                <ng-container *ngFor="let item of data; index as i;">
                  <div *ngIf="i > 9 && !data[i].single" class="col-sm-2 py-4 border">{{data[i].name}}</div>
                </ng-container>
              </div>
            </div>
          </div>
          <!-- end -->
      </div>
      <!-- end second-row -->


    <!-- </ng-container> -->

  </div>
https://www.ag-grid.com/javascript-grid-cell-styles/
