import socket
import subprocess

def check_port(port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex(('localhost', port))
        
        if result == 0:
            print(f"Port {port} is open and accessible")
            
            # 尝试使用 lsof 命令查找进程
            try:
                lsof_result = subprocess.check_output(['lsof', '-ti', f':{port}'], text=True)
                if lsof_result:
                    pid = int(lsof_result.strip())
                    print(f"Process ID using port {port}: {pid}")
                    # 获取进程信息
                    ps_result = subprocess.check_output(['ps', '-p', str(pid), '-o', 'cmd'], text=True)
                    print(f"Process command: {ps_result.strip()}")
                else:
                    print("No process found using lsof")
            except FileNotFoundError:
                print("lsof command not found")
            except subprocess.CalledProcessError:
                print("Failed to get process information")
                
        else:
            print(f"Port {port} is not open or accessible")
            
        sock.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_port(8080)