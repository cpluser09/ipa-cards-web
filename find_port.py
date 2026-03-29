import socket
import subprocess

def find_port_process(port):
    try:
        # 尝试连接到端口
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex(('localhost', port))
        
        if result == 0:
            print(f"Port {port} is open")
            
            # 使用 lsof 命令查找进程
            try:
                output = subprocess.check_output(['lsof', '-ti', f':{port}'], text=True)
                if output:
                    pid = int(output.strip())
                    print(f"Process ID: {pid}")
                    
                    # 使用 ps 命令获取进程信息
                    try:
                        ps_output = subprocess.check_output(['ps', '-p', str(pid), '-o', 'comm='], text=True)
                        print(f"Process name: {ps_output.strip()}")
                        
                        # 尝试杀死进程
                        subprocess.run(['kill', '-9', str(pid)])
                        print(f"Process {pid} killed")
                    except Exception as e:
                        print(f"Error getting process info: {e}")
            except FileNotFoundError:
                print("lsof command not found")
            except Exception as e:
                print(f"Error: {e}")
                
        sock.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    find_port_process(8080)