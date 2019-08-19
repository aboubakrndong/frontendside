/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FrontappliTestModule } from '../../../test.module';
import { ZonesDeleteDialogComponent } from 'app/entities/zones/zones-delete-dialog.component';
import { ZonesService } from 'app/entities/zones/zones.service';

describe('Component Tests', () => {
  describe('Zones Management Delete Component', () => {
    let comp: ZonesDeleteDialogComponent;
    let fixture: ComponentFixture<ZonesDeleteDialogComponent>;
    let service: ZonesService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FrontappliTestModule],
        declarations: [ZonesDeleteDialogComponent]
      })
        .overrideTemplate(ZonesDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ZonesDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ZonesService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
