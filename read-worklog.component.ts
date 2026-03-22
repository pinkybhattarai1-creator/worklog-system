import { Component, OnInit } from '@angular/core';
import { WorklogService } from '../worklog.service';

@Component({
  selector: 'app-read-worklog',
  templateUrl: './read-worklog.component.html',
  styleUrls: ['./read-worklog.component.css']
})
export class ReadWorklogComponent implements OnInit {

  readData: any[] = [];
  successmsg: any;

  constructor(private service: WorklogService) {}

  ngOnInit(): void {
    // สำคัญมาก ต้องเรียกตอนเปิดหน้า
    this.getAllWorklogs();
  }

  getAllWorklogs(): void {
    this.service.getAllData().subscribe({
      next: (res) => {
        console.log('API /worklogs response =>', res);
        // ถ้า backend ส่ง { message, data: [...] }
        // ก็ใช้ res.data ถ้า backend ส่งเป็น array ตรง ๆ ก็ใช้ res
        this.readData = res.data ?? res;
      },
      error: (err) => {
        console.error('Error while loading worklogs', err);
      }
    });
  }

  deleteWorklog(id: any): void {
    if (!confirm('ต้องการลบข้อมูลนี้ใช่หรือไม่?')) return;

    this.service.deleteData(id).subscribe({
      next: (res) => {
        console.log('Delete response =>', res);
        this.successmsg = res.message || 'ลบข้อมูลสำเร็จ';
        this.getAllWorklogs(); // โหลดใหม่หลังลบ
      },
      error: (err) => {
        console.error('Error while deleting worklog', err);
      }
    });
  }
}
