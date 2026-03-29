import socket
import os
import subprocess

def find_and_kill_port(port):
    try:
        # 创建一个套接字连接到指定端口，以获取进程ID
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect(('localhost', port))
        
        # 获取套接字的文件描述符
        sock_fd = sock.fileno()
        
        # 使用 lsof 命令查找占用该端口的进程（如果可用）
        try:
            lsof_result = subprocess.check_output(['lsof', '-ti', f':{port}'], text=True)
            if lsof_result:
                pid = int(lsof_result.strip())
                print(f"Found process {pid} using port {port}")
                subprocess.run(['kill', '-9', str(pid)])
                print(f"Process {pid} killed")
            else:
                print(f"No process found using port {port}")
        except FileNotFoundError:
            print("lsof command not found, trying alternative method")
            
            # 尝试使用 netstat 命令（如果可用）
            try:
                netstat_result = subprocess.check_output(['netstat', '-anp', 'tcp'], text=True)
                lines = netstat_result.split('\n')
                for line in lines:
                    if f':{port}' in line and 'LISTEN' in line:
                        parts = line.split()
                        if len(parts) > 6:
                            pid = parts[6].split('/')[0]
                            print(f"Found process {pid} using port {port}")
                            subprocess.run(['kill', '-9', pid])
                            print(f"Process {pid} killed")
                            break
                else:
                    print(f"No process found using port {port}")
            except FileNotFoundError:
                print("netstat command not found, could not determine which process is using the port")
                
    except ConnectionRefusedError:
        print(f"Port {port} is listening but connection refused")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        try:
            sock.close()
        except:
            pass

if __name__ == "__main__":
    find_and_kill_port(8080)