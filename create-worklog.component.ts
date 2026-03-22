import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorklogService } from '../worklog.service';

@Component({
  selector: 'app-create-worklog',
  templateUrl: './create-worklog.component.html',
  styleUrls: ['./create-worklog.component.css']
})
export class CreateWorklogComponent implements OnInit {

  constructor(private service: WorklogService) { }

  errormsg: any;
  successmsg: any;

  // ฟอร์มของ "ระบบบันทึกงาน"
  workForm = new FormGroup({
    title: new FormControl('', Validators.required),      // ชื่องาน
    detail: new FormControl(''),                          // รายละเอียด (จะ required หรือไม่ก็ได้)
    work_date: new FormControl('', Validators.required),  // วันที่ทำงาน
    hours: new FormControl('', Validators.required),      // ชั่วโมงที่ใช้
    status: new FormControl('กำลังทำ', Validators.required) // สถานะเริ่มต้น
  });

  ngOnInit(): void { }

  workSubmit() {
    if (this.workForm.valid) {

      console.log(this.workForm.value, 'workForm value');

      this.service.createData(this.workForm.value).subscribe((res) => {
        console.log(res, 'res ==>');

       
        this.workForm.reset({
          status: 'กำลังทำ'
        });

        this.successmsg = res.message || 'เพิ่มบันทึกงานสำเร็จ';
        this.errormsg = '';
      }, (err) => {
        console.log(err);
        this.errormsg = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        this.successmsg = '';
      });

    } else {
      this.errormsg = 'กรุณากรอกข้อมูลให้ครบถ้วน';
      this.successmsg = '';
    }
  }
}
